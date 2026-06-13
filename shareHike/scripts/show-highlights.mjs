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

export default async function displayHighlights() {
    try {
        let html = "";
        const section = document.querySelector("#highlights")
        const data = await getData();

        data.forEach(hike => {
            if(hike.rating === "⭐⭐⭐⭐⭐") {
                html += `
                    <div class="hike">
                        <h2>${hike.user}</h2>

                        <img src="${hike.img}"
                            alt="${hike.name}" loading="lazy">

                        <p id="rating">${hike.rating}</p>
                        
                        <h3>${hike.title}</h3>

                        <p>${hike.description}</p>

                        <p>Location: ${hike.location}</p>
                        <div class="category">
                            <h4>Categories</h4>
                            <ul class="categories">
                                <li>Mountain</li>
                                <li>Waterfall</li>
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