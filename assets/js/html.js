const card = record => `
        <div class="storeHeader">
            <div class="storeLogo" id="storeLogo">
                <img src="/assets/imgs/Three-Bars-adidas-logo-1.jpg.jfif.webp" alt="Logo" />
            </div>
            <div class="storeInfo" id="storeInfo">
                <h2 class="storeName" id="storeName">${record.nom_site}</h2>
                <p class="storeDistance" id="storeDistance">Address: ${record.adress || 'N/A'}</p>
            </div>
        </div>
        <div class="storeInfos" id="storeInfos">
            <div class="iconFlex" id="storeSports">Sports: ${record.sports}</div>
            <div class="iconFlex" id="storeStartDate">Start Date: ${record.start_date}</div>
            <div class="iconFlex" id="storeEndDate">End Date: ${record.end_date}</div>
        </div>
        <div class="storeDescription" id="storeDescription">
            <h3 id="storeCategory">${record.category_id}</h3>
            <p id="storeDetails">Details: ${record.details || 'N/A'}</p>
        </div>
        <div class="storeFooter">
            <button class="detailsButton">More Details</button>
        </div>
`;

export { card };
