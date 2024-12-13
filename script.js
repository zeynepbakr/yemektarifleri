// Slider Fonksiyonları
const slides = [
    {
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=80',
        title: 'Türk Mutfağının En Lezzetli Tarifleri',
        description: 'Geleneksel lezzetleri modern sunumlarla keşfedin'
    },
    {
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=80',
        title: 'Ev Yapımı Lezzetler',
        description: 'Anneannelerimizden gelen tarifleri öğrenin'
    },
    {
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=2000&q=80',
        title: 'Sağlıklı Tarifler',
        description: 'Hem lezzetli hem sağlıklı yemekler yapın'
    }
];

const recipes = [
    {
        url: 'karniyarik.html',
        name: 'Karnıyarık',
        description: 'Patlıcanın en lezzetli hali',
        image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?auto=format&fit=crop&w=2000&q=80'
    },
    {
        url: 'manti.html',
        name: 'Mantı',
        description: 'Geleneksel Türk mutfağının vazgeçilmezi',
        image: 'https://iasbh.tmgrup.com.tr/eed1fd/1200/627/0/8/2048/1076?u=https://isbh.tmgrup.com.tr/sbh/2022/04/28/kayseriden-gelen-enfes-bir-lezzet-ev-yapimi-manti-tarifi-1651127024213.jpg'
    },
    {
        url: 'iskender.html',
        name: 'İskender',
        description: 'Bursa\'nın meşhur lezzeti',
        image: 'https://images.unsplash.com/photo-1539755530862-00f623c00f52?auto=format&fit=crop&w=2000&q=80'
    }
];

let currentSlide = 0;

// Slider'ı başlat
function initSlider() {
    const slidesContainer = document.querySelector('.slides');
    const dotsContainer = document.querySelector('.slider-dots');

    // Slaytları oluştur
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
        slideElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}">
            <div class="slide-content">
                <h2>${slide.title}</h2>
                <p>${slide.description}</p>
            </div>
        `;
        slidesContainer.appendChild(slideElement);

        // Nokta oluştur
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

// Slayt değiştirme
function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Sonraki slayt
function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
}

// Önceki slayt
function prevSlide() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

// Tarifleri yükle
function loadRecipes() {
    const recipesGrid = document.querySelector('.recipes-grid');
    
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-content">
                <h3><a href="${recipe.url}">${recipe.name}</a></h3>
                <p>${recipe.description}</p>
            </div>
        `;
        recipesGrid.appendChild(recipeCard);
    });
}

// Mobil menü toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    loadRecipes();
    // Event listeners
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

    // Otomatik slayt değişimi
    setInterval(nextSlide, 1500);

    // Smooth scroll için nav linklerine event listener ekle
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            // Tüm linklerden 'active' sınıfını kaldır
            document.querySelectorAll('a[href^="#"]').forEach(link => {
                link.classList.remove('active');
            });
    
            // Tıklanan linke 'active' sınıfını ekle
            this.classList.add('active');
    
            // Hedef elemente yumuşak kaydırma yap
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// Formu ve alanları seçiyoruz
var form = document.getElementById('contact-form');
var name_surname = document.getElementById('name_surname');
var email = document.getElementById('email');
var message = document.getElementById('message');

// Form gönderildiğinde çalışacak fonksiyon
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini önler
    alert('Formunuz başarıyla tarafımıza ulaşmıştır!');
});
