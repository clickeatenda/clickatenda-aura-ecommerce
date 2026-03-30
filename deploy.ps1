# Deploy Script para o App Aura Moda
Write-Host "Iniciando processo de deploy..."
git init
git checkout -b main
git add .
git commit -m "Init Aura Moda MVP"

Write-Host "Criando repositório no GitHub..."
gh repo create clickatenda-aura-ecommerce --public --source=. --push

Write-Host "Fazendo deploy no Vercel..."
npx vercel --prod --yes

Write-Host "Adicionando domínio customizado..."
npx vercel domains add aura.clickeatende.com.br

Write-Host "Deploy completo!"
