export default function findIndex () {
    let numberArray = [1, 2, 4, 5, 6];
    let stringArray = ['string1', 'string3'];
    
    const fourIndex = numberArray.findIndex(a => a === 4);
    const string3Index = stringArray.findIndex(a => a === 'string3');
    return (
        <div id="wd-find-index">
            <h4>Find Index</h4>
            fourIndex = {fourIndex}<br />
            string3Index = {string3Index}<hr />
        </div>
    );
}
