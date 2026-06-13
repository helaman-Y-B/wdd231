async function getData() {
    try {

        const response = await fetch("./data/hikes.json")

        if(!response.ok) {
            throw new Error(`Bad resquest - Data not found.`)
        }

        const data = await response.json();
        return data.hikes;

    } catch(error) {
        console.log(`Data not fetched ${error}`)
    }
    
}

export async function displayHighlights() {
    try {
        let html = "";
        const section = document.querySelector("#highlights")
        const data = await getData();

        data.forEach(hike => {
            if(hike.rating === "⭐⭐⭐⭐⭐") {
                html += `
                    <div class="hike">
                        <h2>By ${hike.user}</h2>

                        <img src="${hike.img}"
                            alt="${hike.name}" loading="lazy">

                        <p id="rating">${hike.rating}</p>
                        
                        <h3>${hike.title}</h3>

                        <p>${hike.description}</p>

                        <p>Location: ${hike.location}</p>
                        <div class="category">
                            <h4>Categories</h4>
                            <ul class="categories">
                                ${hike.category.map(category => `<li>${category}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `
            }
            
        });

        section.innerHTML = html;

    } catch(error) {
        console.log(`Failed to display Hightlights: ${error}`);
    }
}

export async function displayHikes() {
    try {
        let html = "";
        const section = document.querySelector("#hikes")
        const data = await getData();

        data.forEach(hike => {
            
            html += `
                <div class="hike">
                    <h2>By ${hike.user}</h2>

                    <img src="${hike.img}"
                        alt="${hike.name}" loading="lazy">

                    <p id="rating">${hike.rating}</p>
                    
                    <h3>${hike.title}</h3>

                    <p>${hike.description}</p>

                    <p>Location: ${hike.location}</p>
                    <div class="category">
                        <h4>Categories</h4>
                        <ul class="categories">
                            ${hike.category.map(category => `<li>${category}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `
        
            
        });

        section.innerHTML = html;

    } catch(error) {
        console.log(`Failed to display Hikes: ${error}`);
    }
}

export async function displayHighToLow() {

    try {
        let html = "";
        const section = document.querySelector("#hikes")
        const data = await getData();

        // Sort data descending (Highest to Lowest) based on the string length of the stars in rating.
        const sortedData = data.sort((a, b) => b.rating.length - a.rating.length);

        sortedData.forEach(hike => {
            
            html += `
                <div class="hike">
                    <h2>By ${hike.user}</h2>

                    <img src="${hike.img}"
                        alt="${hike.name}" loading="lazy">

                    <p id="rating">${hike.rating}</p>
                    
                    <h3>${hike.title}</h3>

                    <p>${hike.description}</p>

                    <p>Location: ${hike.location}</p>
                    <div class="category">
                        <h4>Categories</h4>
                        <ul class="categories">
                            ${hike.category.map(category => `<li>${category}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `
        
            
        });

        section.innerHTML = html;

    } catch(error) {
        console.log(`Failed to display Hikes: ${error}`);
    }
    
}

export async function displayLowToHigh() {
    try {
        let html = "";
        const section = document.querySelector("#hikes");
        
        const data = await getData();

        // Sort data ascending (Lowest to Highest) based on the string length of the stars in rating.
        const sortedData = data.sort((a, b) => a.rating.length - b.rating.length);

        sortedData.forEach(hike => {
            
            html += `
                <div class="hike">
                    <h2>By ${hike.user}</h2>

                    <img src="${hike.img}"
                        alt="${hike.name}" loading="lazy">

                    <p id="rating">${hike.rating}</p>
                    
                    <h3>${hike.title}</h3>

                    <p>${hike.description}</p>

                    <p>Location: ${hike.location}</p>
                    <div class="category">
                        <h4>Categories</h4>
                        <ul class="categories">
                            ${hike.category.map(category => `<li>${category}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `
        
            
        });

        section.innerHTML = html;

    } catch(error) {
        console.log(`Failed to display Hikes: ${error}`);
    }
}

export async function displayByCategory(targetCategory) {
    try {
        let html = "";
        const section = document.querySelector("#hikes");
        
        const data = await getData();

        // If "All" is selected, use the full data array. Otherwise, filter it.
        const filteredData = targetCategory === "All" 
            ? data 
            : data.filter(hike => 
                hike.category.some(category => category.toLowerCase() === targetCategory.toLowerCase())
              );

        filteredData.forEach(hike => {
            
            html += `
                <div class="hike">
                    <h2>By ${hike.user}</h2>

                    <img src="${hike.img}"
                        alt="${hike.name}" loading="lazy">

                    <p id="rating">${hike.rating}</p>
                    
                    <h3>${hike.title}</h3>

                    <p>${hike.description}</p>

                    <p>Location: ${hike.location}</p>
                    <div class="category">
                        <h4>Categories</h4>
                        <ul class="categories">
                            ${hike.category.map(category => `<li>${category}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `
        
            
        });

        // Optional: Show a message if no hikes match the selected category
        if (filteredData.length === 0) {
            html = `<p class="no-results">No hikes found in the "${targetCategory}" category.</p>`;
        }

        section.innerHTML = html;

    } catch(error) {
        console.log(`Failed to display Hikes by category: ${error}`);
    }
}