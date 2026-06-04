#!/bin/bash
# ─────────────────────────────────────────────────────────
# 🚀 Deploy Undangan Digital to Vercel
# ─────────────────────────────────────────────────────────
# Prerequisites:
#   1. GitHub account (https://github.com/signup)
#   2. Vercel account (https://vercel.com/signup)
#
# Steps:
#   Step 1: Create a GitHub repo
#   Step 2: Push code to GitHub
#   Step 3: Import in Vercel
# ─────────────────────────────────────────────────────────

echo ""
echo "╔════════════════════════════════════════════════════╗"
echo "║           UNDANGAN DIGITAL - DEPLOY               ║"
echo "╚════════════════════════════════════════════════════╝"
echo ""

# ─── Step 1: GitHub ────────────────────────────────────
echo "──────────────────────────────────────────────"
echo "📌 STEP 1: Create a GitHub Repository"
echo "──────────────────────────────────────────────"
echo ""
echo "  1. Open https://github.com/new"
echo "  2. Repository name: undangan"
echo "  3. Click 'Create repository'"
echo "  4. Run the commands below:"
echo ""
echo "  git remote add origin https://github.com/YOUR_USERNAME/undangan.git"
echo "  git push -u origin main"
echo ""

read -p "  Already created the repo? Press Enter to continue... " -r

# ─── Push to GitHub ────────────────────────────────────
echo ""
echo "──────────────────────────────────────────────"
echo "📌 PUSHING TO GITHUB..."
echo "──────────────────────────────────────────────"
echo ""

echo "  First, add your remote:"
echo "    git remote add origin https://github.com/YOUR_USERNAME/undangan.git"
echo ""
echo "  Then push:"
echo "    git push -u origin main"
echo ""
echo "  (Replace YOUR_USERNAME with your GitHub username)"
echo ""

# ─── Step 3: Vercel ────────────────────────────────────
echo "──────────────────────────────────────────────"
echo "📌 STEP 3: Deploy on Vercel"
echo "──────────────────────────────────────────────"
echo ""
echo "  1. Open https://vercel.com/new"
echo "  2. Import your 'undangan' repository"
echo "  3. Click 'Deploy'"
echo "  4. Wait 1-2 minutes..."
echo ""
echo "  🎉 YOUR SITE IS LIVE!"
echo "  URL: https://undangan.vercel.app"
echo ""

echo "──────────────────────────────────────────────"
echo "📌 AFTER DEPLOYMENT"
echo "──────────────────────────────────────────────"
echo ""
echo "  Customize links to guests:"
echo "  https://undangan.vercel.app/?to=Nama+Tamu"
echo ""
echo "  Share via WhatsApp:"
echo "  https://undangan.vercel.app/?to=Bu+Siti"
echo ""
echo "  No ?to param → shows default 'Nama Tamu Undangan'"
echo ""

echo "──────────────────────────────────────────────"
echo "📌 UPDATE AFTER DEPLOY (Auto-deploy on push)"
echo "──────────────────────────────────────────────"
echo ""
echo "  1. Edit config.json on your computer"
echo "  2. Run:"
echo "     git add config.json"
echo "     git commit -m \"Update wedding info\""
echo "     git push"
echo "  3. Vercel auto-deploys in 1-2 minutes!"
echo ""

echo "🎊 READY TO DEPLOY! 🎊"
echo ""
