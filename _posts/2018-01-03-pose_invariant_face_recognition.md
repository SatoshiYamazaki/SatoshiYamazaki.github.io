---
layout: post
title: "Disentangled Representation Learning 
GAN for Pose-Invariant Face Recognition"
tags: CVPR2017 CV DeepLearning GAN Pose-Invariant
eye_catch: 
---

Authors:  Timur Bagautdinov, Alexandre Alahi, François Fleuret, Pascal Fua, Silvio Savarese   
[http://cvlab.cse.msu.edu/pdfs/Tran_Yin_Liu_CVPR2017.pdf](http://cvlab.cse.msu.edu/pdfs/Tran_Yin_Liu_CVPR2017.pdf)  

<!--more-->

## Overview
- GANによる画像⽣成の仕組みを利⽤して、姿勢不変の（⾓度が異な
る）顔画像を⽣成しようとする試み.
- 例えば横顔を正⾯顔に変換する、オクルージョンがある場合にオクルージョンを外すと⾔ったことができる.
- このDisentangled Representation GAN（DR-GAN）は顔画像と固定⻑のノイズ、姿勢コードを⼊⼒とすることで異なるビューポイントの顔画像を出⼒する.
- DR-GANの特徴としては、
    1. Encoder-Decorderモデルにより、識別的にも⽣成的にもすぐれたモデルを構築
    2. 表情やビューポイントが異なる場合にも推定可能
    3. 同⼀⼈物の複数画像⼊⼒からより精度の⾼い⽣成結果を得ることができる。

## Novelty
- Encoder-Decorderの仕組みによるGANにより、異なる⾓度の顔画像を推定.
- 表情や姿勢の変化に頑健な、なおかつ複数画像の⼊⼒からより精度の⾼い⽣成結果を得られる.

## Reference
(Japanese) [CVPR2017 quick report](http://sssslide.com/www.slideshare.net/cvpaperchallenge/cvpr-2017-78294211)
