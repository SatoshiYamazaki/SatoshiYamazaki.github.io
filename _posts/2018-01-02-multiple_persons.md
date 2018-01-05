---
layout: post
title: "Social Scene Understanding: End-to-End Multi Person Action Localization and Collective Activity Recognition"
tags: CVPR2017 CV DeepLearning RNN TemporalReasoning CollectiveActivity SocialActivity
eye_catch: 
---

Authors:  Timur Bagautdinov, Alexandre Alahi, François Fleuret, Pascal Fua, Silvio Savarese   
[http://www.idiap.ch/~ﬂeuret/papers/bagautdinov-et-al-cvpr2017.pdf](http://www.idiap.ch/~ﬂeuret/papers/bagautdinov-et-al-cvpr2017.pdf)  
[https://github.com/cvlab-epﬂ/social-scene-understanding](https://github.com/cvlab-epﬂ/social-scene-understanding)

<!--more-->

## Overview
- Raw Videoを⼊⼒として複数⼈の検出と個々の⾏動の認識，集団としての⾏動の認識を⾏う⼿法を提案
- 各フレームごとにCNN (FCN) に⼊⼒し，N個のBounding Boxに対する特徴ベクトルを算出，それをRNNに⼊⼒してTemporal Reasoningすることで洗練
化.
- これら全体をEnd-to-Endで学習するためのフレームワークを実現．

## Novelty
- 事前の⼈検出などを⼀切することなくRaw Videoを⼊⼒としてIndividual Action, Collective Activityの認識と，そのEnd-to-Endの学習フレームワークを実現
- 従来の⼿法（⼈物領域のGround Truthを利⽤）した⼿法よりも⾼い精度を実現


## Reference
(Japanese) [CVPR2017 quick report](http://sssslide.com/www.slideshare.net/cvpaperchallenge/cvpr-2017-78294211)
