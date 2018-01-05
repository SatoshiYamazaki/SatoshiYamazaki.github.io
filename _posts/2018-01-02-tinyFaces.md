---
layout: post
title: "Finding Tiny Faces"
tags: CVPR2017 CV DeepLearning FaceDetection TinyFaces WIDER_Face FDDB
eye_catch: 
---

Authors: Peiyun Hu, Deva Ramanan  
[ https://arxiv.org/pdf/1612.04402.pdf]( https://arxiv.org/pdf/1612.04402.pdf)  
[https://github.com/peiyunh/tiny](https://github.com/peiyunh/tiny)

<!--more-->

## Overview
- 物体検出の試みが2014年からの数年で進んでいるが、ひとつの課題が⼩さな物体への対応.
- 本論⽂では３つの側⾯（スケール普遍性、画像解像度、コンテキストを考慮した意味づけ）から⼩さな顔を検出する⼿法を模索.
- 極めて⼩さい顔(e.g. 3pxl tal )は通常の顔とは異なるため、異なる学習を実⾏.
- 効率化を図るため、完全に分離した学習ではなく、Multi-task学習.
- 通常の顔に対してはStraight-forwardな学習を⾏うが、⼩さな物体に対してはコンテキストが効果的である。FDDBやWIDER FACEなど巨⼤なデータベースにおいてState-of-the-artな精度を達成.
- ⼩さな顔ほど、画像パッチに対するTight-ﬁttingが重要である
- ⾯⽩いことに⼩さな顔は⼩さな受容野(Receptive Field)が効果的であった（⼩さな顔はオクルージョンがなく、全て⾒えていることが多いため）.

## Novelty
- 複数解像度や複数のデータセット拡張やMulti-task学習により極めて⼩さな顔を検出した
- FDDBやWIDER FACEなど巨⼤なDBに対してState-of-the-artな精度（右図）
- 密に解像度を変更して、ピラミッド画像を構成する異なるスケールには異なる検出器を割り当てる.
- あらゆる画像変換を⾏い学習を実⾏する。⼩さな顔は通常学習画像に含まれていないが、積極的に⽣成する.
- ⼩さな顔ほど、コンテキストが驚くほど効いている

## Reference
(Japanese) [CVPR2017 quick report](http://sssslide.com/www.slideshare.net/cvpaperchallenge/cvpr-2017-78294211)
