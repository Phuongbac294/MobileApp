const Dpipe = (v, p, z, l) => {
    var d1 = Math.pow(v, 1.85) * 450 * l;
    var d2 = p * z;
    return Math.pow(d1/d2, 1/5)
};
module.exports = Dpipe;