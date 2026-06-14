<?php
// Дані Telegram
$botToken = "8942461249:AAF8R_z6uRIbj1Vt8gClp7wt_d711lv6XHg";
$chatId = "926766364";

// Отримати JSON
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo 'Немає даних';
    exit;
}

// Дані з форми
$name = $data['name'] ?? '';
$phone = $data['phone'] ?? '';
$email = $data['email'] ?? '';
$service = $data['service'] ?? '';
$userMessage = $data['message'] ?? '';

// Формування повідомлення
$message = "📩 Нова заявка з сайту Codevix Studio\n\n";

$message .= "👤 Ім'я: {$name}\n";
$message .= "📞 Телефон: {$phone}\n";

if (!empty($email)) {
    $message .= "📧 Email: {$email}\n";
}

$message .= "🛠 Послуга: {$service}\n";

if (!empty($userMessage)) {
    $message .= "💬 Повідомлення:\n{$userMessage}\n";
}

// URL Telegram API
$url = "https://api.telegram.org/bot{$botToken}/sendMessage";

// Дані для POST
$postData = [
    'chat_id' => $chatId,
    'text' => $message,
];

// Налаштування запиту
$options = [
    'http' => [
        'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($postData),
        'timeout' => 5
    ],
];

$context = stream_context_create($options);

// Відправка
$response = file_get_contents($url, false, $context);

if ($response) {
    echo 'OK';
} else {
    http_response_code(500);
    echo 'Error';
}