class BaseModel {
    constructor(model) {
        this.model = model;
    }

    async get() {
        const data = await this.model.find();
        return data.exec();
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = BaseModel;
