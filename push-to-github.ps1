# SkillsPro - Push to Your GitHub Account
# PowerShell script to help you push your code to YOUR GitHub repository

Write-Host "🚀 SkillsPro - GitHub Setup" -ForegroundColor Cyan
Write-Host "==========================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "❌ Error: Not a git repository" -ForegroundColor Red
    exit 1
}

# Check if there's already a remote
$currentRemote = git remote -v
if ($currentRemote) {
    Write-Host "⚠️  Warning: Remote already exists:" -ForegroundColor Yellow
    Write-Host $currentRemote
    Write-Host ""
    $remove = Read-Host "Do you want to remove it and add your own? (y/n)"
    if ($remove -eq 'y' -or $remove -eq 'Y') {
        git remote remove origin
        Write-Host "✅ Removed existing remote" -ForegroundColor Green
    } else {
        Write-Host "❌ Cancelled" -ForegroundColor Red
        exit 1
    }
}

# Get GitHub username
Write-Host ""
$githubUsername = Read-Host "Enter YOUR GitHub username"

if ([string]::IsNullOrWhiteSpace($githubUsername)) {
    Write-Host "❌ Error: Username cannot be empty" -ForegroundColor Red
    exit 1
}

# Get repository name
Write-Host ""
$repoName = Read-Host "Enter repository name (default: skillspro)"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "skillspro"
}

# Construct repository URL
$repoUrl = "https://github.com/$githubUsername/$repoName.git"

Write-Host ""
Write-Host "📋 Summary:" -ForegroundColor Cyan
Write-Host "  Username: $githubUsername"
Write-Host "  Repository: $repoName"
Write-Host "  URL: $repoUrl"
Write-Host ""

$confirm = Read-Host "Is this correct? (y/n)"

if ($confirm -ne 'y' -and $confirm -ne 'Y') {
    Write-Host "❌ Cancelled" -ForegroundColor Red
    exit 1
}

# Add remote
Write-Host ""
Write-Host "🔗 Adding remote..." -ForegroundColor Cyan
git remote add origin $repoUrl

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Remote added successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to add remote" -ForegroundColor Red
    exit 1
}

# Verify remote
Write-Host ""
Write-Host "📡 Verifying remote..." -ForegroundColor Cyan
git remote -v

# Ask if user wants to push now
Write-Host ""
$pushNow = Read-Host "Do you want to push now? (y/n)"

if ($pushNow -eq 'y' -or $pushNow -eq 'Y') {
    Write-Host ""
    Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
    Write-Host ""
    Write-Host "⚠️  Note: You'll need to authenticate with:" -ForegroundColor Yellow
    Write-Host "  - Personal Access Token (recommended), or"
    Write-Host "  - GitHub Desktop, or"
    Write-Host "  - SSH key"
    Write-Host ""
    
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host ""
        Write-Host "🎉 Your repository is now available at:" -ForegroundColor Green
        Write-Host "   https://github.com/$githubUsername/$repoName" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "🚀 Next steps:" -ForegroundColor Cyan
        Write-Host "   1. Visit your repository on GitHub"
        Write-Host "   2. Deploy to Vercel: https://vercel.com/new"
        Write-Host "   3. Add environment variables (DATABASE_URL, ADMIN_USERNAME, ADMIN_PASSWORD)"
        Write-Host "   4. Your app will be live!"
    } else {
        Write-Host ""
        Write-Host "❌ Push failed. Common issues:" -ForegroundColor Red
        Write-Host "   1. Repository doesn't exist - Create it first at https://github.com/new"
        Write-Host "   2. Authentication failed - Use Personal Access Token"
        Write-Host "   3. Permission denied - Check repository access"
        Write-Host ""
        Write-Host "📖 See SETUP_YOUR_GITHUB.md for detailed instructions" -ForegroundColor Yellow
    }
} else {
    Write-Host ""
    Write-Host "✅ Remote configured. Push later with:" -ForegroundColor Green
    Write-Host "   git push -u origin main" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "Done! 🎉" -ForegroundColor Green
