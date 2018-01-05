---
layout: post
title: Learning from Simulated and Unsupervised Images through Adversarial Training
tags: CVPR2017 CV DeepLearning GAN
eye_catch: 
---

Authors:  A. Shrivastava, T. Pfister, O. Tuzel, J. Susskind, W. Wang et. al.   
[http://openaccess.thecvf.com/content_cvpr_2017/papers/Shrivastava_Learning_From_Simulated_CVPR_2017_paper.pdf](http://openaccess.thecvf.com/content_cvpr_2017/papers/Shrivastava_Learning_From_Simulated_CVPR_2017_paper.pdf)

<!--more-->

## Overview
- ⼈⼯的に⽣成した合成画像とラベルなしの実画像を使った学習アルゴリズムを提案．
- ラベル付き実画像を⼤量に⽤意するのは⼤変．合成画像は⼤量に⽤意可能だが実画像とのギャップから性能が低下する場合がある．
- そこで，実画像に近い画像を⽣成して学習するための⼿法を提案．基本的な枠組みはGANと同様のAdversarial Training．合成画像を実画像に近づけるように変換するReﬁnerと，Reﬁneした画像か実画像かを識別するDiscriminatorを対⽴させ学習．
- これにより，合成画像をそのまま利⽤して学習するよりも⾼い性能を実現できることを⽰した．

## Novelty

- 合成画像とラベルなし実画像を組み合わせる学習⼿法を提案(Simulated+Unsupervised Learning)
- 安定した学習の実現やReﬁne過程にアーティファクトが出現しないようにするためにGANの枠組みを修正

## Reference
(Japanese) [CVPR2017 quick report](http://sssslide.com/www.slideshare.net/cvpaperchallenge/cvpr-2017-78294211)
