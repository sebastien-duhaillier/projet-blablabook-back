# Guide de déploiement - BlaBlaBook Backend

## 🚀 Options de déploiement recommandées

### 1. Railway (Recommandé)
- PostgreSQL intégré
- Déploiement automatique depuis Git
- Variables d'environnement faciles à configurer

### 2. Render
- Plan gratuit disponible
- Base de données PostgreSQL incluse
- SSL automatique

### 3. Heroku
- Plateforme mature
- Add-ons PostgreSQL disponibles
- Configuration via Procfile

## 📋 Étapes de déploiement

### Préparation

1. **Créer une base de données PostgreSQL en cloud** :
   - [Neon.tech](https://neon.tech) (gratuit)
   - [Supabase](https://supabase.com) (gratuit)
   - [ElephantSQL](https://elephantsql.com) (gratuit)

2. **Configurer les variables d'environnement** :
```bash
PORT=3000
DB_URL=postgresql://username:password@hostname:5432/dbname
JWT_SECRET=your_super_secure_jwt_secret_key
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

### Railway

1. Connecter votre repo GitHub
2. Configurer les variables d'environnement
3. Le déploiement se fait automatiquement

### Render

1. Connecter votre repo GitHub
2. Configurer :
   - Build Command: `npm install`
   - Start Command: `npm start`
3. Ajouter les variables d'environnement

### Heroku

1. Installer Heroku CLI
2. Créer l'application : `heroku create votre-app-name`
3. Ajouter PostgreSQL : `heroku addons:create heroku-postgresql:hobby-dev`
4. Configurer les variables : `heroku config:set JWT_SECRET=votre_secret`
5. Déployer : `git push heroku main`

## 🔧 Configuration post-déploiement

1. **Tester les endpoints** :
   - GET `/` - Vérifier que l'API répond
   - POST `/api/auth/register` - Test d'inscription
   - GET `/api/books` - Test de récupération des livres

2. **Vérifier les logs** pour identifier d'éventuels problèmes

3. **Configurer le CORS** avec l'URL de votre frontend

## 🐛 Résolution des problèmes courants

- **Erreur de connexion DB** : Vérifier l'URL de la base de données
- **Erreur CORS** : Configurer `FRONTEND_URL` correctement  
- **Port binding** : Utiliser `process.env.PORT` (configuré automatiquement)
- **Variables manquantes** : Vérifier toutes les variables d'environnement

## 📞 Support

En cas de problème, vérifiez :
1. Les logs de l'application
2. La configuration des variables d'environnement
3. La connectivité à la base de données
