let arr = [];

function createInputs() {
    const size = Number(document.getElementById("arraySize").value);
    if (size <= 0) {
        document.getElementById("result").innerText = "⚠️ Please enter a valid size!";
        return;
    }
    
    let inputs = "";
    for (let i = 0; i < size; i++) {
        inputs += `<input type="text" class="array-element" placeholder="Element ${i}"><br>`;
    }
    
    document.getElementById("elementsInputs").innerHTML = inputs;
    document.getElementById("checkArrayBtn").style.display = "inline-block";
    document.getElementById("result").innerText = "";
}

function checkArray() {
    arr = [];
    document.querySelectorAll(".array-element").forEach(inp => {
        let val = inp.value;
        try { 
            val = JSON.parse(val); 
        } catch(e) {}
        arr.push(val);
    });
    
    document.getElementById("result").innerText = "Array: " + JSON.stringify(arr);
}

function checkIndex() {
    if (arr.length === 0) {
        document.getElementById("result").innerText = "⚠️ Please create and check the array first!";
        return;
    }
    
    const index = Number(document.getElementById("checkIndex").value);
    
    if (index < 0 || index >= arr.length) {
        document.getElementById("result").innerText = "Array: " + JSON.stringify(arr) + "\n\n⚠️ Invalid index! Index must be between 0 and " + (arr.length - 1);
        return;
    }
    
    const msg = Array.isArray(arr[index])
        ? `✓ Element at index ${index} is an Array.`
        : `✗ Element at index ${index} is NOT an Array.`;
    
    // Show only the array and current check result (erase previous checks)
    document.getElementById("result").innerText = "Array: " + JSON.stringify(arr) + "\n\n" + msg;
}