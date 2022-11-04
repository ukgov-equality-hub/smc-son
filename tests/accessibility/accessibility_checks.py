from colorama import Fore, Back, Style
from playwright.async_api import Page


class AccessibilityChecks:
    def __init__(self):
        self.page_titles_and_urls = {
            # The structure of this is { 'Page Title A': set('url_1', 'url_2'),  'Page Title B': set('url_3') }
        }

    async def run_checks_on_page(self, page: Page, page_description=None):
        print_now(f"Running accessibility tests for page {Fore.CYAN}{page.url}{Style.RESET_ALL} { ('(' + page_description + ')') if page_description else '' }")
        await self.check_accessibility_multiple_h1_elements(page)
        await self.check_accessibility_every_input_has_a_label(page)
        await self.check_accessibility_every_id_is_unique(page)
        await self.check_accessibility_no_empty_links(page)
        await self.check_accessibility_every_aria_described_by_has_a_matching_target_element(page)
        await self.check_accessibility_error_summary_links_link_to_input_element(page)
        await self.save_page_title(page)
        print_now("")  # Blank line to improve formatting


    async def check_accessibility_multiple_h1_elements(self, page: Page):
        print_now("|  Checking for multiple <h1> elements")
        number_of_h1_elements_on_page = await page.locator('h1').count()
        print_coloured(f"|  |  Found {number_of_h1_elements_on_page} <h1> elements", error=(number_of_h1_elements_on_page != 1))
        assert number_of_h1_elements_on_page == 1


    async def check_accessibility_every_input_has_a_label(self, page: Page):
        print_now("|  Checking that every <input> element has exactly one matching <label> element")
        input_elements = page.locator('input:not([type="hidden"]):not([type="submit"])')
        number_of_input_elements = await input_elements.count()
        print_now(f"|  |  Found {number_of_input_elements} <input> elements")

        for n in range(number_of_input_elements):
            input_element = input_elements.nth(n)
            input_id = await input_element.get_attribute('id')
            input_type = await input_element.get_attribute('type')
            print_now(f"|  |  Checking number of labels for <input id=\"{input_id}\" type=\"{input_type}\">")
            number_of_label_elements = await page.locator('label[for="' + input_id + '"]').count()
            print_coloured(f"|  |  |  Found {number_of_label_elements} <label> elements for <input id=\"{input_id}\" type=\"{input_type}\">", error=(number_of_label_elements != 1))
            assert number_of_label_elements == 1


    async def check_accessibility_every_id_is_unique(self, page: Page):
        print_now("|  Checking that every element with an id has a unique id")
        elements_with_id = page.locator('*[id]')
        number_of_elements_with_id = await elements_with_id.count()
        print_now(f"|  |  Found {number_of_elements_with_id} elements with an id")

        for n in range(number_of_elements_with_id):
            element_with_id = elements_with_id.nth(n)
            element_id = await element_with_id.get_attribute('id')
            number_of_elements_with_this_id = await page.locator('*[id="' + element_id + '"]').count()
            if number_of_elements_with_this_id > 1:
                print_coloured(f"|  |  Found {number_of_elements_with_this_id} elements with id=\"{element_id}\"", error=True)
            assert number_of_elements_with_this_id == 1


    async def check_accessibility_no_empty_links(self, page: Page):
        print_now("|  Checking that every <a> link has text content - i.e. not <a href=...></a>")
        links = page.locator('a')
        number_of_links = await links.count()
        print_now(f"|  |  Found {number_of_links} links")

        for n in range(number_of_links):
            link = links.nth(n)
            link_text_content: str = await link.inner_text()
            link_text_content_is_all_whitespace = is_null_or_whitespace(link_text_content)
            if link_text_content_is_all_whitespace:
                print_coloured(f"|  |  Found link with no text content", error=True)
            assert not link_text_content_is_all_whitespace


    async def check_accessibility_every_aria_described_by_has_a_matching_target_element(self, page: Page):
        print_now("|  Checking that every element with aria-describedby='xyz' has a matching element with id='xyz'")
        elements_with_aria_described_by_attribute = page.locator('*[aria-describedby]')
        number_of_elements_with_aria_described_by_attribute = await elements_with_aria_described_by_attribute.count()
        print_now(f"|  |  Found {number_of_elements_with_aria_described_by_attribute} elements with aria-describedby attribute")

        for n in range(number_of_elements_with_aria_described_by_attribute):
            element_with_aria_described_by_attribute = elements_with_aria_described_by_attribute.nth(n)
            aria_described_by_id = await element_with_aria_described_by_attribute.get_attribute('aria-describedby')
            print_now(f"|  |  Checking number of possible targets of aria-describedby=\"{aria_described_by_id}\"")
            number_of_elements_with_matching_id = await page.locator('#' + aria_described_by_id).count()
            print_coloured(f"|  |  |  Found {number_of_elements_with_matching_id} possible targets of aria-describedby=\"{aria_described_by_id}\"", error=(number_of_elements_with_matching_id != 1))
            assert number_of_elements_with_matching_id == 1


    async def check_accessibility_error_summary_links_link_to_input_element(self, page: Page):
        print_now("|  Checking that every link within the Error Summary links to an <input> element")
        links_in_error_summary = page.locator('.govuk-error-summary a')
        number_of_links_in_error_summary = await links_in_error_summary.count()
        print_now(f"|  |  Found {number_of_links_in_error_summary} links within the Error Summary")

        for n in range(number_of_links_in_error_summary):
            link_in_error_summary = links_in_error_summary.nth(n)
            link_href = await link_in_error_summary.get_attribute('href')
            print_now(f"|  |  Checking the Error Summary link with href=\"{link_href}\"")
            link_starts_with_hash = link_href[:1] == '#'
            assert link_starts_with_hash
            link_target_id = link_href[1:]
            link_target_element_found = await page.locator('#' + link_target_id).count() == 1
            if not link_target_element_found:
                print_coloured(f"|  |  |  Error Summary link with target {link_href} but there is no element with id=\"{link_href}\"", error=True)
            assert link_target_element_found
            link_target_tag_name = await page.locator('#' + link_target_id).evaluate("e => e.tagName.toLowerCase()")
            if link_target_tag_name != 'input' and link_target_tag_name != 'textarea':
                print_coloured(f"|  |  |  Error Summary link with target {link_href} should point to an <input> but actually points to a <{link_target_tag_name}>", error=True)
            assert link_target_tag_name == 'input' or link_target_tag_name == 'textarea'


    async def save_page_title(self, page: Page):
        page_url = page.url

        hash_position = page_url.find('#')
        if hash_position != -1:
            page_url = page_url[:hash_position]

        query_position = page_url.find('?')
        if query_position != -1:
            page_url = page_url[:query_position]
        
        page_title = await page.title()
        if page_title not in self.page_titles_and_urls:
            self.page_titles_and_urls[page_title] = set()
        self.page_titles_and_urls[page_title].add(page_url)

    #
    # --------------------------------------------------------------------------------------------
    def run_final_checks(self):
        self.check_accessibility_no_duplicate_page_titles()


    def check_accessibility_no_duplicate_page_titles(self):
        for page_title in self.page_titles_and_urls:
            page_urls = self.page_titles_and_urls[page_title]
            number_of_pages_with_same_title = len(page_urls)
            if number_of_pages_with_same_title > 1:
                print_coloured(f"|  |  Found {number_of_pages_with_same_title} pages with the same title (\"{page_title}\")", error=True)
                for page_url in page_urls:
                    print_coloured(f"|  |  |  Url: {page_url}", error=True)
            assert number_of_pages_with_same_title == 1

        print_now("")  # Blank line to improve formatting


def is_null_or_whitespace(value: str):
    if value is None: return True
    if value == '': return True
    if value.isspace(): return True
    return False


def print_coloured(message, error=False):
    if error:
        print_now(f"{Fore.RED}{message}{Style.RESET_ALL}")
    else:
        print_now(message)


def print_now(message):
    print(message, flush=True)