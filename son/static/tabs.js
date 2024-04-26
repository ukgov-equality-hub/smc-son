
// Moves "Download the chart" etc. links to the relevant "Download" tab
document.addEventListener('DOMContentLoaded', function() {
    const tabs_blocks = document.querySelectorAll('.visualisation-tabs');

    tabs_blocks.forEach(tabs_block => {
        const list_items_to_move_to_download_section = tabs_block.querySelectorAll('li.move-to-download-section');
        const download_section_list = tabs_block.querySelectorAll('.download_section_list')[0];

        list_items_to_move_to_download_section.forEach(list_item => {
            download_section_list.appendChild(list_item);
        })
    })
});
