document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if (index < pageIndex) {
                page.style.transform = `rotateY(-180deg)`;
            } else if (index === pageIndex) {
                page.style.transform = `rotateY(0deg)`;
            } else {
                page.style.transform = `rotateY(180deg)`;
            }
        });
    }

    document.getElementById('nextButton').addEventListener('click', function () {
        currentPage = (currentPage + 1) % pages.length;
        showPage(currentPage);
    });

    document.getElementById('prevButton').addEventListener('click', function () {
        currentPage = (currentPage - 1 + pages.length) % pages.length;
        showPage(currentPage);
    });

    showPage(currentPage);  // Show the initial page
});
