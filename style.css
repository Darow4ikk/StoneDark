* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
}

body, html {
    width: 100%;
    height: 100%;
}

/* --- HERO SECTION --- */
.hero {
    position: relative;
    width: 100%;
    height: 100vh;

    /* Фон */
    background: url("assets/images/hero-bg.jpg") center/cover no-repeat;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
}

/* Фиолетовый градиент Tilda */
.gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to bottom,
        rgba(128, 0, 128, 0.6),
        rgba(0, 0, 0, 0.7)
    );
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    opacity: 0;
    transform: translateY(40px);
    animation: appear 1.5s ease-out forwards;
}

/* Заголовок */
.title {
    font-size: 64px;
    font-weight: 700;
    opacity: 0;
    transform: scale(0.7);
    animation: zoomIn 1.2s ease-out forwards;
}

/* Подзаголовок */
.subtitle {
    margin-top: 20px;
    font-size: 22px;
    opacity: 0;
    transform: scale(0.7);
    animation: zoomIn 1.2s ease-out 0.3s forwards;
}

/* Кнопка */
.hero-btn {
    display: inline-block;
    margin-top: 40px;
    padding: 18px 40px;

    background: black;
    border: 3px solid #c667ff;
    border-radius: 50px;

    color: white;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;

    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 1.2s ease-out 0.8s forwards;

    transition: box-shadow 0.3s ease, transform 0.2s ease;
}

/* Свечение кнопки */
.hero-btn:hover {
    box-shadow: 0 0 20px #b44bff;
    transform: scale(1.05);
}

/* Стрелка вниз */
.scroll-down {
    width: 32px;
    height: 32px;
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(45deg);
    margin: 60px auto 0;
    opacity: 0;
    animation: fadeIn 1.2s ease-out 1.4s forwards;
}

/* --- KEYFRAMES --- */
@keyframes appear {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes zoomIn {
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slideUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
