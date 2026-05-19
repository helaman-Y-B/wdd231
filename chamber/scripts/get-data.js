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
        displayData(data.companies);

    } catch(error){
        console.log(`Data not fetched ${error}`)
    }
}

function displayData(data) {
    let membersList = document.querySelector("#members-container");

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

getMembersData();

/**
 * <div class="members">
        <img src="" alt="" class="member-image">
        <h4 class="member-name">Something</h4>
        <ul>
            <li><strong>Location:</strong> <span class="member-location"></span></li>
            <li><strong>Contact:</strong> <span class="member-contact"></span></li>
            <li><strong>Website:</strong> <a href="" target="_blank" class="member-link"></a></li>
            <li><strong>Tier:</strong> <span class="member-tier"></span></li>
            <li><strong>Size:</strong> <span class="member-size"></span> Collaborators</li>
        </ul>
    </div>
 */