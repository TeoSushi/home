document.addEventListener("DOMContentLoaded", function () {
    // Hiển thị spinner và overlay khi trang web được tải
    document.getElementById("spinner-container").style.display = "block";
    document.getElementById("transparent-overlay").style.display = "block";
    document.body.classList.add("transparent-effect"); // Thêm hiệu ứng transparent

    // Ẩn spinner và overlay sau 1 giây
    setTimeout(function () {
        // Gỡ bỏ lớp transparent-effect trước khi ẩn spinner và overlay
        document.body.classList.remove("transparent-effect");

        // Ẩn spinner và overlay sau một khoảng thời gian nhỏ
        setTimeout(function () {
            document.getElementById("spinner-container").style.display = "none";
            document.getElementById("transparent-overlay").style.display = "none";
        }, 100);
    }, 1000);
});
