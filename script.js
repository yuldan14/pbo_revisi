function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    var stok = document.getElementById('stok');
    stok.classList.toggle('on');
}

var currentPage = 1;
    var rowsPerPage = 10;
    var table = document.getElementById('myTable');
    var rows = table.getElementsByTagName('tr');
    var pageInfo = document.getElementById('pageInfo');

    function showPage(page) {
        var start = (page - 1) * rowsPerPage;
        var end = start + rowsPerPage;

        for (var i = 1; i < rows.length; i++) {
            if (i >= start && i < end) {
                rows[i].style.display = 'table-row';
            } else {
                rows[i].style.display = 'none';
            }
        }

        pageInfo.textContent = page + '/' + Math.ceil(rows.length / rowsPerPage);
    }

    function nextPage() {
        if (currentPage < Math.ceil(rows.length / rowsPerPage)) {
            currentPage++;
            showPage(currentPage);
        }
    }

    function previousPage() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    }

    showPage(currentPage);
