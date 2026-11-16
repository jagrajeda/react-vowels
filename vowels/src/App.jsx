import { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [wordHistory, setWordHistory] = useState([]);

  const vowels = 'aeiouAEIOU';

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedWord = inputText.trim();
    if (!cleanedWord) return;

    setWordHistory((prevWords) => [...prevWords, cleanedWord]);
    setInputText('');
  };

  const countVowels = (word) => {
    return word.split('').filter((char) => vowels.includes(char)).length;
  };

  return (
    <main>
      <h1>Vowel Finder</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a word..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {wordHistory.length > 0 && (
        <div>
          <h2>Word History:</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {wordHistory.map((word, wordIndex) => (
              <li key={wordIndex} style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '1.5rem', margin: '0 0 0.25rem 0' }}>
                  {word.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className={vowels.includes(char) ? 'vowel' : ''}
                    >
                      {char}
                    </span>
                  ))}
                </p>
                <small>Vowel Count: {countVowels(word)}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default App;