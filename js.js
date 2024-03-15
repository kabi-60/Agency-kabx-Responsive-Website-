function mobilemenu()
{
    var menu1=document.getElementById('menu');
    if(menu1.classList.contains('hidden'))
    {
        menu1.classList.remove('hidden');
    }
    else
    {
        menu1.classList.add('hidden');

    }
}