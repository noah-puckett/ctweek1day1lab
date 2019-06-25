const store = require('./store');

describe('store', () => {
    it('can getState', () => {
        const state = store.getState();

        expect(state).toEqual({
            shirts: 5,
            pants: 10,
            toys: 100,
            shoes: 1,
            apples: 9
        });
    });

    it('can updateState', () => {
        store.updateState('shirts', 100);

        const state = store.getState();
    
        expect(state).toEqual({
            shirts: 100,
            pants: 10,
            toys: 100,
            shoes: 1,
            apples: 9
        });
    });
});

const state = {
    shirts: 5,
    pants: 10,
    toys: 100,
    shoes: 1,
    apples: 9
};

function getState() {
    return state;
}


//I have no idea if this wooooorrrrks
function updateState(key, value) {
    state[key] = value;
}

module.exports = { state, getState, updateState };

