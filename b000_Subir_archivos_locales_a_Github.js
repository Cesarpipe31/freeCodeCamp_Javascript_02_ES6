// Cómo pasar archivos localStorage, tu proyecto, y publicarlo a GitHub
// y aparece este error:    error: remote origin already exists.

//git remote --verbose
//git remote set-url origin https://github.com/Cesarpipe31/freeCodeCamp_Javascript.git
//git remote add origin https://github.com/Cesarpipe31/freeCodeCamp_Javascript.git
//  git branch -M main
//  git push -u origin main
//  git status
//  git add .
//  git commit -m "XXXX"
//  git push

// LAS INSTRUCCIONES ORIGINALES IMPARTIDAS POR GITHUB AL 26/05/2022

// Quick setup — if you’ve done this kind of thing before
// or
// https://github.com/Cesarpipe31/aaa.git
// Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

// …or create a new repository on the command line
// echo "# aaa" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Cesarpipe31/aaa.git
// git push -u origin main

// …or push an existing repository from the command line
// git remote add origin https://github.com/Cesarpipe31/aaa.git
// git branch -M main
// git push -u origin main

// …or import code from another repository
// You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

// ERROR DETECTADO:  REMOTE ORIGIN ALREADY EXISTS

// Windows PowerShell
// Copyright (C) Microsoft Corporation. Todos los derechos reservados.

// Prueba la nueva tecnología PowerShell multiplataforma https://aka.ms/pscore6

// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git remote add origin https://github.com/Cesarpipe31/freeCodeCamp_Javascript.git
// error: remote origin already exists.

// REGISTRE LA SIGUIENTE SOLUCION

// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git remote --verbose
// origin  https://github.com/Cesarpipe31/freeCodeCamp_Javascript.git (fetch)
// origin  https://github.com/Cesarpipe31/freeCodeCamp_Javascript.git (push)

// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git remote set-url origin https://github.com/Cesarpipe31/freeCodeCamp_Javascript.git
// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git remote add origin https://github.com/Cesarpipe31/freeCodeCamp_Javascript.git
// error: remote origin already exists.

// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git remote --verbose
// origin  https://github.com/Cesarpipe31/freeCodeCamp_Javascript.git (fetch)

// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git branch -M main

// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git push -u origin main
// Enumerating objects: 18, done.
// Counting objects: 100% (18/18), done.
// Delta compression using up to 8 threads
// Compressing objects: 100% (18/18), done.
// Writing objects: 100% (18/18), 6.29 KiB | 2.10 MiB/s, done.
// remote: Resolving deltas: 100% (4/4), done.
// To https://github.com/Cesarpipe31/freeCodeCamp_Javascript.git
//  * [new branch]      main -> main

// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git status
// On branch main
// Your branch is up to date with 'origin/main'.

// Changes not staged for commit:
//   (use "git add/rm <file>..." to update what will be committed)
//   (use "git restore <file>..." to discard changes in working directory)
//         deleted:    freeCodeCamp_Javascript

// no changes added to commit (use "git add" and/or "git commit -a")

// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git add .

// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git status
// On branch main
// Your branch is up to date with 'origin/main'.

// Changes to be committed:
//   (use "git restore --staged <file>..." to unstage)
//         deleted:    freeCodeCamp_Javascript

// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git commit -m "freeCodeCamp_Javascript 01"
// [main 8999b58] freeCodeCamp_Javascript 01
//  1 file changed, 1 deletion(-)
//  delete mode 160000 freeCodeCamp_Javascript

//  PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript> git push
// Enumerating objects: 3, done.
// Counting objects: 100% (3/3), done.
// Delta compression using up to 8 threads
// Compressing objects: 100% (2/2), done.
// Writing objects: 100% (2/2), 252 bytes | 252.00 KiB/s, done.
// Total 2 (delta 1), reused 0 (delta 0), pack-reused 0
// remote: Resolving deltas: 100% (1/1), completed with 1 local object.
// To https://github.com/Cesarpipe31/freeCodeCamp_Javascript.git
//    dd58222..8999b58  main -> main

// PS D:\PC_CD\VID\Apr_Aut\Full_Stack_Soy_Henry\SelfLearn\freeCodeCamp_Javascript>
