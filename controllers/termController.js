const Term = require('../schemas/term');

async function createTerm(academic_year, due_date, term, amount = null) {
    try {
        const newTerm = new Term({
            academic_year,
            due_date,
            term,
            amount
        });
        await newTerm.save();
        return newTerm;
    } catch (error) {
        throw error;
    }
}

async function updateTerm(termId, updateData) {
    try {
        const updatedTerm = await Term.findByIdAndUpdate(termId, updateData, { new: true });
        return updatedTerm;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createTerm,
    updateTerm
};
