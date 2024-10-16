

// Hiển thị thông báo
function showNotifications() {
    document.querySelector('.overlay').classList.add('show');
    document.querySelector('.notifications-container').style.display = 'block';
}

// Ẩn thông báo
function hideNotifications() {
    document.querySelector('.overlay').classList.remove('show');
    document.querySelector('.notifications-container').style.display = 'none';
}

// Ví dụ sử dụng
showNotifications(); // Gọi hàm này để hiển thị thông báo


export default hideNotifications;

