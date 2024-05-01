const Dairy = require('../schemas/dairy');

// Function to create a new dairy entry
async function createDairy(homework, classId, date = new Date()) {
  try {
    const newEntry = await Dairy.create({
      homework,
      classId,
      date
    });
    return newEntry;
  } catch (error) {
    throw new Error(`Error creating dairy entry: ${error.message}`);
  }
}

// Function to update an existing dairy entry
async function updateDairy(id, updates) {
  try {
    const updatedEntry = await Dairy.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedEntry) {
      throw new Error("Dairy entry not found");
    }
    return updatedEntry;
  } catch (error) {
    throw new Error(`Error updating dairy entry: ${error.message}`);
  }
}

module.exports = {
  createDairy,
  updateDairy
};
