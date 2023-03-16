(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{332:function(a,t,s){"use strict";s.r(t);var r=s(4),_=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"第二章-线程安全性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二章-线程安全性"}},[a._v("#")]),a._v(" 第二章 线程安全性")]),a._v(" "),t("p",[a._v("线程安全性：当多个线程访问某个类式，这个类始终都能表现出正确的行为，那么就称这个类是线程安全的。")]),a._v(" "),t("h3",{attrs:{id:"_2-2-原子性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-原子性"}},[a._v("#")]),a._v(" 2.2 原子性")]),a._v(" "),t("p",[a._v("++count不是原子操作\n包含“读取-修改-写入”操作序列")]),a._v(" "),t("p",[a._v("竞态条件\n当某个计算的正确性取决于多个线程的交替执行时序时，就会发生竞态条件。正确的结果取决于运行\n最常见的竞态条件类型是”先检查后执行“")]),a._v(" "),t("p",[a._v("复合操作\n在java.util.concurrent.atomic包中包含了一些原子变量类。\n使用包中的AtomicLong来代替long类型的计数器，能够保证所有对计数器状态的访问操作都是原子的。")]),a._v(" "),t("h3",{attrs:{id:"_2-3-加锁机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-加锁机制"}},[a._v("#")]),a._v(" 2.3 加锁机制")]),a._v(" "),t("h4",{attrs:{id:"_2-3-1-内置锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-内置锁"}},[a._v("#")]),a._v(" 2.3.1 内置锁")]),a._v(" "),t("p",[a._v("同步代码块（Synchronized Block）\n同步代码块包括两部分：一个作为锁的对象引用，一个作为由这个锁保护的代码块。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("synchronized(lock){\n\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("这些锁被称为内置锁或监视器锁。\n线程进入同步代码块之前自动获得锁，退出代码块时自动释放锁。这是获得内置锁的唯一途径。")]),a._v(" "),t("h3",{attrs:{id:"_2-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4"}},[a._v("#")]),a._v(" 2.4")]),a._v(" "),t("h2",{attrs:{id:"第三章-对象的共享"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三章-对象的共享"}},[a._v("#")]),a._v(" 第三章 对象的共享")]),a._v(" "),t("h3",{attrs:{id:"_3-1-可见性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-可见性"}},[a._v("#")]),a._v(" 3.1 可见性")]),a._v(" "),t("p",[a._v("重排序？\n为什么永远不停止？")]),a._v(" "),t("p",[a._v("volatile变量。编译器和运行时会注意到这个变量是共享的\n不会将该变量上的操作与其他内存操作一起重排序\nvolatile是一种比synchronized关键字更轻量级的同步机制")]),a._v(" "),t("p",[a._v("加锁机制既可以确保可见性又可以确保原子性，而volatile只能确保可见性")]),a._v(" "),t("p",[a._v("当且仅当满足以下所有条件时，才应该使用volatile变量")]),a._v(" "),t("ul",[t("li",[a._v("对变量的写入操作不依赖变量的当前值，或者你能确保只有单个线程更新变量的值")]),a._v(" "),t("li",[a._v("该变量不会与其他状态变量一起纳入不变性条件中")]),a._v(" "),t("li",[a._v("访问变量时不需要加锁")])])])}),[],!1,null,null,null);t.default=_.exports}}]);