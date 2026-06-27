const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Lab 5: Triển khai ứng dụng Web lên Azure thành công!</h1><p>Ứng dụng chạy trên Azure App Service.</p>');
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại port ${PORT}`);
});