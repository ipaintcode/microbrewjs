// Simple Microbrew Model/Collection

/**
 *
 * @param dataset
 * @constructor
 */
const Brew = function(beerArgs) {
    this.brewName = beerArgs.brewName;
    this.brewType = beerArgs.brewType;
    this.abv 	  = beerArgs.abv;
    this.brewInfo = () => `${brewName}: ${brewType}: ${abv}`;
};

// Distillery = collection... Hiccup!
/**
 * Nothing to see here
 */
const Crafts = () => {
    const distillery = [];
    return {
        addCraft(keg) {
            // Pourin'a new Brew on the fly!
            distillery.push(new Brew(keg));
        },
        getCraftList(valid_id) {
            // Easter egg, show your id, ok bad joke...
            return (valid_id === undefined) ? distillery : distillery[valid_id];
        }
    };
};

const crafts = new Crafts();

crafts.addCraft({
    brewName: 'Mad Cat 180&deg;',
    brewType: 'Double IPA',
    abv:      '18.00%'
});

crafts.addCraft({
    brewName: 'Hop Top Shizam',
    brewType: 'IPA',
    abv:      '12.50%'
});
crafts.addCraft({
    brewName: 'Cuckoo for Stout',
    brewType: 'Java Stout',
    abv:      '7.70%'
});
crafts.addCraft({
    brewName: 'Featherweight Wuss',
    brewType: 'Light Lager',
    abv:      '4.20%'
});

// Test'r out!
console.log(JSON.stringify(crafts.getCraftList()));