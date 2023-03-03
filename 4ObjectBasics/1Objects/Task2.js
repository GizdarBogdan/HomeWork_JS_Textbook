function isEmpty(currentObject)
{
    for (let key in currentObject)
    {
        return false;
    }
    return true;
}