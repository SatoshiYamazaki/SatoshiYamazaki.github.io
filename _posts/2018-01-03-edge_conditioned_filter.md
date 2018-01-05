---
layout: post
title: "Dynamic Edge-Conditioned Filters in Convolutional Neural Networks on Graphs"
tags: CVPR2017 CV DeepLearning CNN Point_cloud Graph_neural_network
eye_catch: 
---

Authors:  Martin Simonovsky, Nikos Komodakis   
[https://arxiv.org/pdf/1704.02901.pdf](https://arxiv.org/pdf/1704.02901.pdf)  
[PyTorch implementation](https://github.com/mys007/ecc)

<!--more-->

## Overview
- グラフの畳み込みをpoint cloud classiﬁcationに応⽤
して、CNNでのグラフ⽣成より優れたedge-conditioned convolution (ECC) を提案．
- 提案の畳み込みフィルター重みはedge lablesで調節され,かつ対象のインプットごとに動的に⽣成される．
- そのためECCはデータセットに応じた任意の可変グラフでWorkする．


## Novelty
- 従来のCNNで扱われていない、edge labelに着眼.
- 情報チャンネルを利⽤し、graph classiﬁcationの性能をあげる畳み込み演算.
- グラフ畳み込みのPoint cloud classificationへの最初の適用研究とのこと. 
- Sydney dataset(Ref1)に対してはスパース性の保持により，volumetricアプローチ(Ref2)よりも高い性能を実現，
- graph classification ベンチマークの NCI1(Ref3)でも他技術と競合するレベルの性能．

(Reference)  
1. M. De Deuge, A. Quadros, C. Hung, and B. Douillard. Unsupervised feature learning for classification of outdoor 3d scans. In Australasian Conference on Robitics and Automation, volume 2, 2013. 1, 5, 6
2. Y. LeCun, Y. Bengio, and G. Hinton. Deep learning. Nature, 521(7553):436–444, 2015. 1
3. N. Wale and G. Karypis. Comparison of descriptor spaces for chemical compound retrieval and classification. In Proc. of ICDM, pages 678–689, Hong Kong, 2006.


## Reference
(Japanese) [CVPR2017 quick report](http://sssslide.com/www.slideshare.net/cvpaperchallenge/cvpr-2017-78294211)
