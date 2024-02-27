document.addEventListener('DOMContentLoaded', function () {
    const macroGrid = document.getElementById('macroGrid');
    const macroDetail = document.getElementById('macroDetail');

    const macroinvertebrates = [
        { name: 'Macroinvertebrate 1', image: 'bug_imgs/backswimmer.png', description: 'Description for Macroinvertebrate 1.' },
        { name: 'Macroinvertebrate 2', image: 'bug_imgs/water_strider.png', description: 'Description for Macroinvertebrate 2.' },
        { name: 'Crawfish', image: 'bug_imgs/crawfish.png', description: 'Crawfish can shed (molt) their shells up to 15 times and they double in size with each molt.  Crawfish are also called crawdads, crayfish and mudbugs. Crawfish can live up to 30 years in the wild. Crawfish can drown without access to fresh air. Crawfish walk forward and swim backward Description: A crayfish has head and thorax, midsection, and a segmented body. The colors varies from dark brown, red, dark green, or sandy yellow. They have a sharp snout, with the eyes located on a movable stalk on the head. The body covering of a crayfish is thin, but very tough. They also have five pairs of legs, including pincers on the front pair. There are also five pairs of small appendages on their stomach, which they use for swimming.' },
        { name: 'Macroinvertebrate 4', image: 'bug_imgs/crawfish1.png', description: 'Description for Macroinvertebrate 4.' },
        { name: 'Macroinvertebrate 5', image: 'bug_imgs/dragonfly.png', description: 'Description for Macroinvertebrate 5.' },
        { name: 'Macroinvertebrate 6', image: 'bug_imgs/dragonfly1.png', description: 'Description for Macroinvertebrate 6.' },
        { name: 'Macroinvertebrate 7', image: 'bug_imgs/leech.png', description: 'Description for Macroinvertebrate 7.' },
        { name: 'Macroinvertebrate 8', image: 'bug_imgs/leech1.png', description: 'Description for Macroinvertebrate 8.' },
        { name: 'Macroinvertebrate 9', image: 'bug_imgs/pouch_snail1.png', description: 'Description for Macroinvertebrate 9.' },
        { name: 'Macroinvertebrate 10', image: 'bug_imgs/stonefly_nymph.png', description: 'Description for Macroinvertebrate 10.' },
        { name: 'Macroinvertebrate 11', image: 'bug_imgs/water_penny.png', description: 'Description for Macroinvertebrate 11.' },
        { name: 'Macroinvertebrate 12', image: 'bug_imgs/water_scavenger_beetle.png', description: 'Description for Macroinvertebrate 12.' },
        // Add more macroinvertebrates as needed
    ];

    // Populate the grid with macroinvertebrate images
    macroinvertebrates.forEach((macro, index) => {
        const macroImage = document.createElement('img');
        macroImage.src = macro.image;
        macroImage.alt = macro.name;
        macroImage.classList.add('grid-item');

        macroImage.addEventListener('click', () => showMacroDetail(macro));
        
        macroGrid.appendChild(macroImage);
    });

    // Display macroinvertebrate details
    function showMacroDetail(macro) {
        macroDetail.innerHTML = `
            <img src="${macro.image}" alt="${macro.name}">
            <div>
                <h2>${macro.name}</h2>
                <p>${macro.description}</p>
            </div>
        `;

        macroGrid.style.display = 'none';
        macroDetail.style.display = 'block';
    }

    // Hide macroinvertebrate details and show the grid again
    macroDetail.addEventListener('click', () => {
        macroGrid.style.display = 'grid';
        macroDetail.style.display = 'none';
    });
});
