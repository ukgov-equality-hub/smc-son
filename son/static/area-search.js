addEventListener("DOMContentLoaded", async (event) => {
    const postcodeSearchForm = document.getElementById('postcode-search-form');
    const areaSearchInput = document.getElementById('area-search');

    ///////////////////////
    // POSTCODE SEARCH
    if (postcodeSearchForm){
        const postcodeSearchFormGroup = postcodeSearchForm.querySelector('.govuk-form-group');
        const postcodeSearchInput = document.getElementById('postcode-search');
        const postcodeSearchError = document.getElementById('postcode-search-error');
        const postcodeSearchErrorMessage = document.getElementById('postcode-search-error-message');

        postcodeSearchForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            function showPostcodeSearchError(message) {
                postcodeSearchFormGroup.classList.add('govuk-form-group--error');
                postcodeSearchInput.classList.add('govuk-input--error');
                postcodeSearchError.style.display = 'block';
                postcodeSearchErrorMessage.innerHTML = message;
            }

            const rawSearchValue = postcodeSearchInput.value;
            if (rawSearchValue === '') {
                showPostcodeSearchError('Enter a postcode');
                return;
            }

            const trimmedSearchValue = rawSearchValue.replace(/\s+/g, '').toUpperCase();
            if (trimmedSearchValue.length < 5) {
                showPostcodeSearchError('Enter a full UK postcode');
                return;
            }

            const postcodeApiUrl = `https://api.postcodes.io/postcodes/${trimmedSearchValue}`;
            const postcodeApiResponse = await fetch(postcodeApiUrl);
            if (!postcodeApiResponse.ok) {
                showPostcodeSearchError('We cannot find this postcode.<br>Try the area search below');
                return;
            }

            const postcodeApiJson = await postcodeApiResponse.json();
            const admin_district = postcodeApiJson.result.codes.admin_district;
            let matchingRegion = regionNamesAndCodes['205_regions'].find((region) => region.codes.includes(admin_district));

            if (!matchingRegion) {
                const admin_county = postcodeApiJson.result.codes.admin_county;
                matchingRegion = regionNamesAndCodes['205_regions'].find((region) => region.codes.includes(admin_county));
            }

            if (matchingRegion) {
                window.location.href = `/state-of-the-nation/social_mobility_by_area/205_regions/${matchingRegion.url}`;
            } else {
                showPostcodeSearchError('We cannot find this region.<br>Try the area search below')
            }
        })
    }

    ////////////////////////
    // AREA NAME SEARCH
    if (areaSearchInput) {
        const areaSearchResults = document.getElementById('area-search-results');
        areaSearchResults.classList.remove('govuk-list');
        areaSearchResults.classList.remove('govuk-list--bullet');

        areaSearchInput.addEventListener('input', async function (event) {
            areaSearchResults.innerHTML = '';

            const searchText = areaSearchInput.value.trim().toLowerCase();
            const matchingAreas = regionNamesAndCodes['205_regions'].filter((region) => region.name.toLowerCase().includes(searchText));
            if (matchingAreas.length <= 20) {
                matchingAreas.forEach((matchingArea) => {
                    const new_li = document.createElement('li');
                    new_li.classList.add('moj-side-navigation__item');

                    const new_a = document.createElement('a');
                    new_a.href = `/state-of-the-nation/social_mobility_by_area/205_regions/${matchingArea.url}`;
                    new_a.classList.add('moj-primary-navigation__link');

                    const lowercaseAreaNme = matchingArea.name.toLowerCase();
                    const originalCaseAreaName = matchingArea.name;
                    let lastIndex = -1
                    let nextIndex = -1;
                    while ((nextIndex = lowercaseAreaNme.indexOf(searchText, lastIndex + 1)) !== -1) {
                        const textBeforeStartPosition = lastIndex === -1 ? 0 : lastIndex + searchText.length;
                        const textBeforeFind = originalCaseAreaName.substring(textBeforeStartPosition, nextIndex);
                        const new_span = document.createElement('span');
                        new_span.innerText = textBeforeFind;
                        new_a.appendChild(new_span);

                        const textFound = originalCaseAreaName.substring(nextIndex, nextIndex + searchText.length);
                        const new_b = document.createElement('b');
                        new_b.innerText = textFound;
                        new_a.appendChild(new_b);

                        lastIndex = nextIndex;
                    }
                    const textAfterFind = originalCaseAreaName.substring(lastIndex + searchText.length);
                    const new_span = document.createElement('span');
                    new_span.innerText = textAfterFind;
                    new_a.appendChild(new_span);

                    new_li.appendChild(new_a);
                    areaSearchResults.appendChild(new_li);
                })
            }
        })
    }

    //////////////////////////////////////
    // Load list of regions JSON file
    let regionNamesAndCodes = undefined;
    if (postcodeSearchForm || areaSearchInput) {
        const regionCodesUrl = '/static/data/by-page/social_mobility_by_area/205_regions_codes.json';
        const regionCodesResponse = await fetch(regionCodesUrl);
        if (!regionCodesResponse.ok) {
            // Cannot load region list - don't show search bar
            return;
        }
        regionNamesAndCodes = await regionCodesResponse.json();
    }

    // Only display the postcode search section if javascript is enabled
    if (postcodeSearchForm) {
        postcodeSearchForm.style.display = 'block';
    }
});