function showHome()
{
    $('#content1').load("home/index.html");
}
function show(page)
{
    $('#content1').load(page+".html");
    return false;
}