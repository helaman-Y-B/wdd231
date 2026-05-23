/**
 * Function responsible to get data from members.json file.
 */

async function getMembersData() {
    try {

        const response = await fetch("./data/members.json");

        if(!response.ok) {
            throw new Error(`Bad resquest - Data not found.`)
        }

        const data = await response.json();
        return data.companies;

    } catch(error){
        console.log(`Data not fetched ${error}`)
    }
}

/**
 * Function to create the members list and display it into the 
 * members-list class div in Directory.
 */

export async function displayData() {
    let membersList = document.querySelector("#members-container");
    const data = await getMembersData();

    data.forEach(member => {

        // Create and set attributes
        const memberDiv = document.createElement("div");
        memberDiv.setAttribute("class", "members")

        const memberImg = document.createElement("img");
        memberImg.setAttribute("src", `${member.image}`)
        memberImg.setAttribute("alt", `Image of ${member.name}`)
        memberImg.setAttribute("class", "member-image")

        const memberName = document.createElement("h4");
        memberName.setAttribute("class", `${member.name}`);

        const memberInfo = document.createElement("ul");

        const memberLocation = document.createElement("li");

        const memberContact = document.createElement("li");

        const memberWebsite = document.createElement("li");
        const webSiteLink = document.createElement("a");
        webSiteLink.setAttribute("href", `${member.website}`)

        const memberTier = document.createElement("li");

        const memberSize = document.createElement("li");

        // Insert data into the elements.
        memberName.textContent = `${member.name}`;
        
        // Get all adresses.
        const locations = member.addresses;

        const addresses = locations.map(location => location.address).join(", ");
        
        // Insert text into the created elements.
        memberLocation.textContent = `Addresses: ${addresses}`;
        memberContact.textContent = `Contact: ${member.contact}`;
        memberWebsite.textContent = "Site: ";
        webSiteLink.textContent = `${member.website}`;
        memberTier.textContent = `Membership: ${member.membership}`;
        memberSize.textContent = `Colaborators: ${member.colaborators}`;

        // Set everything to the parent container
        memberDiv.appendChild(memberImg);
        memberDiv.appendChild(memberName);

        memberInfo.appendChild(memberLocation);
        memberInfo.appendChild(memberContact);

        memberWebsite.appendChild(webSiteLink);
        memberInfo.appendChild(memberWebsite);

        memberInfo.appendChild(memberTier);
        memberInfo.appendChild(memberSize);

        memberDiv.appendChild(memberInfo);

        membersList.appendChild(memberDiv);
    });
}

export async function displayIndexData() {
    let membersList = document.querySelector("#members-container");
    const data = await getMembersData();

    data.forEach(member => {
        // Create and set attributes
        const memberDiv = document.createElement("div");
        memberDiv.setAttribute("class", "members")

        const memberImg = document.createElement("img");
        memberImg.setAttribute("src", `${member.image}`)
        memberImg.setAttribute("alt", `Image of ${member.name}`)
        memberImg.setAttribute("class", "member-image")

        const memberName = document.createElement("h4");
        memberName.setAttribute("class", `${member.name}`);

        const memberInfo = document.createElement("ul");

        const memberInfos = document.createElement("li");

        //const webSiteLink = document.createElement("a");
        //webSiteLink.setAttribute("href", `${member.website}`)

        // Insert data into the elements.
        memberName.textContent = `${member.name}`;
        
        // Insert text into the created elements.
        memberInfos.innerHTML = `PHONE: ${member.contact}</br>
                                URL: <a href=${member.website}> ${member.website}</a>`;

        // Set everything to the parent container
        memberDiv.appendChild(memberImg);
        memberDiv.appendChild(memberName);

        memberInfo.appendChild(memberInfos);

        memberDiv.appendChild(memberInfo);

        membersList.appendChild(memberDiv);
    })
}