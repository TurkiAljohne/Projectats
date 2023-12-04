
document.addEventListener('DOMContentLoaded', function () {
    const members = 
    ['تركي عبدالكريم الجهني',
     'سليمان خالد الحويطي',
      'عبدالله علي الشهري',];
    const memberList = document.getElementById('member-list');
    members.sort(() => Math.random() - 0.5);

    members.forEach(member => {
        const listItem = document.createElement('ul');
        listItem.textContent = member;
        memberList.appendChild(listItem);
    });
});


