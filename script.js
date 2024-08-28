document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    document.querySelector('.output-message').style.display = 'none';
    document.getElementById('outputText').style.display = 'block';
    document.getElementById('copyButton').style.display = 'block';
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decrypt(inputText);
    document.querySelector('.output-message').style.display = 'none';
    document.getElementById('outputText').style.display = 'block';
    document.getElementById('copyButton').style.display = 'block';
    document.getElementById('outputText').value = decryptedText;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});

function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}
