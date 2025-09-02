        document.addEventListener('DOMContentLoaded', function() {
            const texts = document.querySelectorAll('.rotating-text');
            let currentIndex = 0;
            
            function rotateText() {
                // Remove active class from current text
                texts[currentIndex].classList.remove('active');
                
                // Move to next text
                currentIndex = (currentIndex + 1) % texts.length;
                
                // Add active class to next text
                texts[currentIndex].classList.add('active');
            }
            
            // Start the text rotation
            setInterval(rotateText, 3000);
            
            // Initialize floating elements animation
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach(el => {
                // Randomize initial position slightly
                const randomX = (Math.random() - 0.5) * 40;
                const randomY = (Math.random() - 0.5) * 40;
                el.style.transform = `translate(${randomX}px, ${randomY}px)`;
            });
        });
