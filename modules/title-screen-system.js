(function() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './styles/title-screen-system.css'; 
    document.head.appendChild(link);
    
    function showSplashScreen() {
        document.body.innerHTML = '';
        const splashScreen = document.createElement('div');
        splashScreen.id = 'splash-screen';
        splashScreen.innerHTML = `
            <main id="splash-container">
                <h2 id="splash-prompt">Click Anywhere to Begin</h2>
            </main>
        `;
        document.body.appendChild(splashScreen);
        
        splashScreen.addEventListener('click', () => {
            showTitleScreen();
        }, { once: true });
    }
    
    function showTitleScreen() {
        document.body.innerHTML = '';
        const titleScreen = document.createElement('div');
        titleScreen.id = 'title-screen';
        
        const appTitle = document.title || "My Local Web App";
        titleScreen.innerHTML = `
            <main id="app-container">
                <header>
                    <h1>${appTitle}</h1>
                    <p>Now using a Title Screen System</p>
                </header>
                <div id="screen-view">
                    <div id="main-menu">
                        <button id="start-button">Start Application</button>
                        <button id="options-button">Options</button>
                        <button id="exit-button">Exit</button>
                    </div>
                </div>
            </main>
        `;
        document.body.appendChild(titleScreen);
        
        document.getElementById('start-button')?.addEventListener('click', () => {
            alert('Starting the application! (Future module will clear this screen)');
        });
        document.getElementById('options-button')?.addEventListener('click', showOptionsScreen);
        document.getElementById('exit-button')?.addEventListener('click', () => {
            window.close();
        });
        
        setTimeout(() => {
            titleScreen.classList.add('fade-in');
        }, 100);
    }
    
    function showOptionsScreen() {
        const screenView = document.getElementById('screen-view');
        if (!screenView) return;
        
        screenView.innerHTML = `
            <div id="options-menu">
                <h2>System Options</h2>
                
                <div id="modular-settings-panel">
                    <p>Future settings from other modules will appear here!</p>
                </div>
                
                <div id="options-controls">
                    <button id="save-button">Save</button>
                    <button id="cancel-button">Cancel</button>
                </div>
            </div>
        `;
        
        document.getElementById('save-button').addEventListener('click', () => {
            alert('Settings Saved! (Future implementation)');
            showTitleScreen();
        });
        document.getElementById('cancel-button').addEventListener('click', () => {
            showTitleScreen();
        });
    }

    showSplashScreen();
})();