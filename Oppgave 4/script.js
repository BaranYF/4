// UI handlers
document.querySelectorAll('.btn').forEach(b => 
    b.onclick = () => b.style.background = b.style.background === 'var(--b)' ? 'var(--d)' : 'var(--b)'
);

const i = document.querySelector('.input');
i.oninput = () => i.style.borderColor = i.value ? 'var(--b)' : 'var(--g)';

const c = document.querySelector('.card');
c.onmouseover = () => c.style.boxShadow = '0 4px 8px #0002';
c.onmouseout = () => c.style.boxShadow = '0 2px 4px #0002';

const a = document.querySelector('.alert');
a.onclick = () => (a.style.opacity = 0, setTimeout(() => a.remove(), 300));

document.querySelectorAll('nav a').forEach(l => {
    l.onclick = e => {
        e.preventDefault();
        document.querySelectorAll('nav a').forEach(n => n.style.fontWeight = '');
        l.style.fontWeight = 'bold';
    }
});

// Toggle and scroll
document.getElementById('toggle').onchange = e => console.log('Toggle:', e.target.checked);

const [u, d] = document.querySelectorAll('.scroll button');
u.onclick = () => scrollTo({top: 0, behavior: 'smooth'});
d.onclick = () => scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});

// Popup
const p = document.querySelector('.popup');
document.getElementById('open').onclick = () => p.style.display = 'block';
document.getElementById('close').onclick = () => p.style.display = 'none';
p.onclick = e => e.target === p && (p.style.display = 'none');

// Calendar
const [D, M, Y] = ['d','m','y'].map(id => document.getElementById(id));
[D.value, M.value, Y.value] = [new Date().getDate(), new Date().getMonth(), new Date().getFullYear()];
const update = () => {
    const last = new Date(Y.value, +M.value + 1, 0).getDate();
    D.max = last;
    if(D.value > last) D.value = last;
};
[M, Y].forEach(e => e.onchange = update);
