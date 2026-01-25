https://claude.ai/public/artifacts/2fb08286-ffb6-4ce0-9c36-bb79acc1bf1f

<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transcript Processor | Horizons Architecture</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --black: #000000;
            --white: #ffffff;
            --gray-100: #f7f7f7;
            --gray-200: #e5e5e5;
            --gray-300: #d4d4d4;
            --gray-400: #a3a3a3;
            --gray-500: #737373;
            --gray-600: #525252;
            --gray-700: #404040;
            --gray-800: #262626;
            --gray-900: #171717;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: var(--white);
            color: var(--black);
            line-height: 1.6;
            min-height: 100vh;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        .header {
            border-bottom: 1px solid var(--gray-200);
            padding: 24px 0;
            background: var(--white);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 20px;
            font-weight: 500;
            letter-spacing: -0.02em;
            color: var(--black);
        }

        .header-meta {
            font-size: 14px;
            color: var(--gray-500);
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
        }

        /* Main Title Section */
        .hero {
            padding: 80px 0 40px;
            border-bottom: 1px solid var(--gray-200);
        }

        .hero h1 {
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 400;
            letter-spacing: -0.03em;
            margin-bottom: 16px;
            color: var(--black);
        }

        .hero p {
            font-size: 18px;
            color: var(--gray-600);
            max-width: 600px;
            line-height: 1.5;
        }

        /* Controls Section */
        .controls-section {
            padding: 40px 0;
            border-bottom: 1px solid var(--gray-200);
        }

        .controls-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }

        @media (max-width: 768px) {
            .controls-grid {
                grid-template-columns: 1fr;
            }
        }

        .control-group {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .control-label {
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--gray-600);
        }

        .options-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .checkbox-item {
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            padding: 8px 0;
        }

        .checkbox-item:hover {
            background: var(--gray-100);
            margin: 0 -8px;
            padding: 8px;
        }

        input[type="checkbox"] {
            width: 18px;
            height: 18px;
            border: 2px solid var(--gray-400);
            background: transparent;
            cursor: pointer;
            appearance: none;
            -webkit-appearance: none;
            position: relative;
        }

        input[type="checkbox"]:checked {
            background: var(--black);
            border-color: var(--black);
        }

        input[type="checkbox"]:checked::after {
            content: '✓';
            position: absolute;
            color: var(--white);
            font-size: 12px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .checkbox-label {
            font-size: 15px;
            color: var(--gray-700);
            user-select: none;
        }

        /* Action Buttons */
        .actions {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .btn {
            padding: 12px 24px;
            font-size: 14px;
            font-weight: 500;
            border: 1px solid var(--black);
            background: var(--white);
            color: var(--black);
            cursor: pointer;
            transition: all 0.2s ease;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            position: relative;
            overflow: hidden;
        }

        .btn:hover {
            background: var(--black);
            color: var(--white);
        }

        .btn-primary {
            background: var(--black);
            color: var(--white);
        }

        .btn-primary:hover {
            background: var(--gray-800);
            border-color: var(--gray-800);
        }

        .btn-ghost {
            border-color: var(--gray-300);
            color: var(--gray-600);
        }

        .btn-ghost:hover {
            border-color: var(--black);
            background: var(--black);
            color: var(--white);
        }

        input[type="file"] {
            display: none;
        }

        /* Statistics */
        .stats-section {
            padding: 40px 0;
            border-bottom: 1px solid var(--gray-200);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 32px;
        }

        .stat-item {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .stat-value {
            font-size: 32px;
            font-weight: 300;
            color: var(--black);
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
        }

        .stat-label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--gray-500);
        }

        /* Textarea Section */
        .content-section {
            padding: 60px 0;
        }

        .textarea-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }

        @media (max-width: 968px) {
            .textarea-grid {
                grid-template-columns: 1fr;
            }
        }

        .textarea-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .textarea-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
        }

        .textarea-title {
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--gray-600);
        }

        .char-count {
            font-size: 12px;
            color: var(--gray-400);
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
        }

        textarea {
            width: 100%;
            height: 500px;
            padding: 20px;
            border: 1px solid var(--gray-300);
            background: var(--white);
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
            font-size: 14px;
            line-height: 1.6;
            resize: vertical;
            transition: border-color 0.2s ease;
        }

        textarea:focus {
            outline: none;
            border-color: var(--black);
        }

        textarea::placeholder {
            color: var(--gray-400);
        }

        textarea[readonly] {
            background: var(--gray-100);
        }

        /* Processing Indicator */
        .processing {
            display: none;
            align-items: center;
            gap: 12px;
            padding: 16px 0;
            font-size: 14px;
            color: var(--gray-600);
        }

        .processing.active {
            display: flex;
        }

        .spinner {
            width: 16px;
            height: 16px;
            border: 2px solid var(--gray-300);
            border-top-color: var(--black);
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Footer */
        .footer {
            padding: 40px 0;
            border-top: 1px solid var(--gray-200);
            margin-top: 80px;
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .footer-text {
            font-size: 14px;
            color: var(--gray-500);
        }

        .footer-links {
            display: flex;
            gap: 32px;
        }

        .footer-link {
            font-size: 14px;
            color: var(--gray-600);
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .footer-link:hover {
            color: var(--black);
        }

        /* Toast Notification */
        .toast {
            position: fixed;
            bottom: 40px;
            right: 40px;
            padding: 16px 24px;
            background: var(--black);
            color: var(--white);
            font-size: 14px;
            display: none;
            animation: slideIn 0.3s ease;
            z-index: 1000;
            max-width: 400px;
        }

        .toast.error {
            background: var(--white);
            color: var(--black);
            border: 2px solid var(--black);
        }

        @keyframes slideIn {
            from {
                transform: translateY(100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        /* Drag State */
        .drag-over {
            background: var(--gray-100);
            border-color: var(--black);
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">HORIZONS ARCHITECTURE</div>
                <div class="header-meta">TRANSCRIPT PROCESSOR v1.0</div>
            </div>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Timestamp Removal System</h1>
                <p>Advanced transcript processing engine for removing temporal markers and formatting dialogue. Optimized for large-scale document processing with deterministic output.</p>
            </div>
        </section>

        <section class="controls-section">
            <div class="container">
                <div class="controls-grid">
                    <div class="control-group">
                        <div class="control-label">Processing Options</div>
                        <div class="options-list">
                            <label class="checkbox-item">
                                <input type="checkbox" id="keepSpeakers" checked>
                                <span class="checkbox-label">Preserve speaker identifiers</span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" id="keepLineNumbers" checked>
                                <span class="checkbox-label">Maintain line numbering</span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" id="mergeContinuous">
                                <span class="checkbox-label">Merge continuous dialogue</span>
                            </label>
                            <label class="checkbox-item">
                                <input type="checkbox" id="addSpacing" checked>
                                <span class="checkbox-label">Add paragraph spacing</span>
                            </label>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="control-label">Actions</div>
                        <div class="actions">
                            <label class="btn">
                                LOAD FILE
                                <input type="file" id="fileInput" accept=".txt,.vtt,.srt">
                            </label>
                            <button class="btn btn-primary" onclick="processTranscript()">
                                PROCESS
                            </button>
                            <button class="btn btn-ghost" onclick="clearAll()">
                                CLEAR
                            </button>
                            <button class="btn" onclick="copyToClipboard()">
                                COPY
                            </button>
                            <button class="btn" onclick="downloadResult()">
                                DOWNLOAD
                            </button>
                        </div>
                        <div class="processing" id="processingIndicator">
                            <div class="spinner"></div>
                            <span>Processing transcript...</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="stats-section">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-value" id="inputLines">0</div>
                        <div class="stat-label">Input Lines</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="outputLines">0</div>
                        <div class="stat-label">Output Lines</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="timestampsRemoved">0</div>
                        <div class="stat-label">Timestamps Removed</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="reduction">0%</div>
                        <div class="stat-label">Size Reduction</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <div class="textarea-grid">
                    <div class="textarea-container">
                        <div class="textarea-header">
                            <div class="textarea-title">Input</div>
                            <div class="char-count" id="inputCharCount">0 characters</div>
                        </div>
                        <textarea id="inputText" placeholder="Paste your transcript with timestamps here...

Example format:
00:03:33.810 --> 00:03:37.980
Speaker Name: Dialogue text content here."></textarea>
                    </div>
                    <div class="textarea-container">
                        <div class="textarea-header">
                            <div class="textarea-title">Output</div>
                            <div class="char-count" id="outputCharCount">0 characters</div>
                        </div>
                        <textarea id="outputText" placeholder="Processed transcript will appear here..." readonly></textarea>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-text">© 2025 Horizons Architecture Systems</div>
                <div class="footer-links">
                    <a href="#" class="footer-link">Documentation</a>
                    <a href="#" class="footer-link">API</a>
                    <a href="#" class="footer-link">Contact</a>
                </div>
            </div>
        </div>
    </footer>

    <div class="toast" id="toast"></div>

    <script>
        // Initialize
        const inputTextarea = document.getElementById('inputText');
        const outputTextarea = document.getElementById('outputText');
        
        // Character count updates
        inputTextarea.addEventListener('input', () => {
            document.getElementById('inputCharCount').textContent = 
                `${inputTextarea.value.length.toLocaleString()} characters`;
            updateStats();
        });

        outputTextarea.addEventListener('input', () => {
            document.getElementById('outputCharCount').textContent = 
                `${outputTextarea.value.length.toLocaleString()} characters`;
        });

        // Drag and drop functionality
        inputTextarea.addEventListener('dragover', (e) => {
            e.preventDefault();
            inputTextarea.classList.add('drag-over');
        });

        inputTextarea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            inputTextarea.classList.remove('drag-over');
        });

        inputTextarea.addEventListener('drop', (e) => {
            e.preventDefault();
            inputTextarea.classList.remove('drag-over');
            
            const file = e.dataTransfer.files[0];
            if (file) {
                readFile(file);
            }
        });

        // File input handling
        document.getElementById('fileInput').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                readFile(file);
            }
        });

        function readFile(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                inputTextarea.value = e.target.result;
                inputTextarea.dispatchEvent(new Event('input'));
                showToast(`File "${file.name}" loaded successfully`);
            };
            reader.onerror = () => {
                showToast('Error reading file', 'error');
            };
            reader.readAsText(file);
        }

        function processTranscript() {
            const input = inputTextarea.value;
            if (!input.trim()) {
                showToast('Please provide input text', 'error');
                return;
            }

            // Show processing indicator
            document.getElementById('processingIndicator').classList.add('active');

            // Process asynchronously to prevent UI blocking
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const keepSpeakers = document.getElementById('keepSpeakers').checked;
                    const keepLineNumbers = document.getElementById('keepLineNumbers').checked;
                    const mergeContinuous = document.getElementById('mergeContinuous').checked;
                    const addSpacing = document.getElementById('addSpacing').checked;

                    const lines = input.split('\n');
                    let output = [];
                    let timestampsCount = 0;
                    let currentSpeaker = '';
                    let currentText = '';
                    let lineNumber = null;

                    for (let i = 0; i < lines.length; i++) {
                        const line = lines[i].trim();
                        
                        // Skip timestamps (VTT/SRT format)
                        if (line.match(/^\d{2}:\d{2}:\d{2}[.,]\d{3}\s*-->\s*\d{2}:\d{2}:\d{2}[.,]\d{3}$/)) {
                            timestampsCount++;
                            continue;
                        }
                        
                        // Handle line numbers
                        if (line.match(/^\d+$/) && !keepLineNumbers) {
                            lineNumber = line;
                            continue;
                        }
                        
                        // Process speaker lines
                        if (line.includes(':')) {
                            const colonIndex = line.indexOf(':');
                            const possibleSpeaker = line.substring(0, colonIndex).trim();
                            const text = line.substring(colonIndex + 1).trim();
                            
                            // Validate it's a speaker (not a time)
                            if (!possibleSpeaker.match(/^\d{2}$/) && text) {
                                // Output accumulated text
                                if (currentText && currentSpeaker) {
                                    const formattedLine = formatOutputLine(
                                        currentSpeaker, 
                                        currentText, 
                                        keepSpeakers, 
                                        keepLineNumbers, 
                                        lineNumber
                                    );
                                    output.push(formattedLine);
                                    
                                    if (addSpacing && (!mergeContinuous || possibleSpeaker !== currentSpeaker)) {
                                        output.push('');
                                    }
                                }
                                
                                // Handle merging or new speaker
                                if (mergeContinuous && possibleSpeaker === currentSpeaker) {
                                    currentText += ' ' + text;
                                } else {
                                    currentSpeaker = possibleSpeaker;
                                    currentText = text;
                                }
                            } else if (line && !line.match(/^\d+$/)) {
                                // Continuation line
                                if (currentText) {
                                    currentText += ' ' + line;
                                } else {
                                    output.push(line);
                                }
                            }
                        } else if (line && !line.match(/^\d+$/)) {
                            // Non-speaker text line
                            if (currentText) {
                                currentText += ' ' + line;
                            } else {
                                output.push(line);
                                if (addSpacing) {
                                    output.push('');
                                }
                            }
                        }
                    }
                    
                    // Add final accumulated text
                    if (currentText && currentSpeaker) {
                        const formattedLine = formatOutputLine(
                            currentSpeaker, 
                            currentText, 
                            keepSpeakers, 
                            keepLineNumbers, 
                            lineNumber
                        );
                        output.push(formattedLine);
                    }

                    // Clean multiple empty lines
                    const cleanedOutput = output.join('\n').replace(/\n{3,}/g, '\n\n');
                    
                    outputTextarea.value = cleanedOutput;
                    outputTextarea.dispatchEvent(new Event('input'));
                    
                    // Update statistics
                    updateStats(timestampsCount);
                    
                    // Hide processing indicator
                    document.getElementById('processingIndicator').classList.remove('active');
                    
                    showToast('Processing complete');
                }, 50);
            });
        }

        function formatOutputLine(speaker, text, keepSpeakers, keepLineNumbers, lineNumber) {
            if (keepLineNumbers && lineNumber) {
                return keepSpeakers ? `${lineNumber}. ${speaker}: ${text}` : `${lineNumber}. ${text}`;
            } else if (keepSpeakers) {
                return `${speaker}: ${text}`;
            } else {
                return text;
            }
        }

        function updateStats(timestampsRemoved = 0) {
            const inputLines = inputTextarea.value.split('\n').filter(l => l.trim()).length;
            const outputLines = outputTextarea.value.split('\n').filter(l => l.trim()).length;
            const reduction = inputLines > 0 ? Math.round((1 - outputLines / inputLines) * 100) : 0;
            
            document.getElementById('inputLines').textContent = inputLines.toLocaleString();
            document.getElementById('outputLines').textContent = outputLines.toLocaleString();
            document.getElementById('timestampsRemoved').textContent = timestampsRemoved.toLocaleString();
            document.getElementById('reduction').textContent = `${reduction}%`;
        }

        function clearAll() {
            inputTextarea.value = '';
            outputTextarea.value = '';
            inputTextarea.dispatchEvent(new Event('input'));
            outputTextarea.dispatchEvent(new Event('input'));
            updateStats();
            showToast('Cleared all content');
        }

        function copyToClipboard() {
            if (!outputTextarea.value.trim()) {
                showToast('No content to copy', 'error');
                return;
            }
            
            outputTextarea.select();
            outputTextarea.setSelectionRange(0, 99999); // Mobile support
            
            try {
                document.execCommand('copy');
                showToast('Copied to clipboard');
            } catch (err) {
                showToast('Copy failed', 'error');
            }
            
            window.getSelection().removeAllRanges();
        }

        function downloadResult() {
            const output = outputTextarea.value;
            if (!output.trim()) {
                showToast('No content to download', 'error');
                return;
            }
            
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
            const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `transcript_processed_${timestamp}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            showToast('Download started');
        }

        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.className = type === 'error' ? 'toast error' : 'toast';
            toast.style.display = 'block';
            
            setTimeout(() => {
                toast.style.display = 'none';
            }, 3000);
        }

        // Auto-process on paste if timestamps detected
        inputTextarea.addEventListener('paste', () => {
            setTimeout(() => {
                if (inputTextarea.value.includes('-->')) {
                    showToast('Timestamps detected - Processing automatically...');
                    setTimeout(processTranscript, 100);
                }
            }, 100);
        });
    </script>
</body>
</html>
