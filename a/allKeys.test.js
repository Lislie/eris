it('basic', function ()
{
    var obj = Object.create({zero: 0});
    obj.one = 1;

    var keys = allKeys(obj);
    expect(keys).to.contain('zero');
    expect(keys).to.contain('one');
});
