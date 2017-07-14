/**
 * @file fis-conf.js
 * @author zjg
 *
 **/

fis.set('project.ignore', [
    'output/**',
    '.git/**',
    '.svn/**',
    'README.md',
    'BCLOUD',
    'fis*',
    '**.sh',
    '**.py',
    'package.json'
]);

fis.set('project.files', '/view/index.html'); // 按需编译。

fis.config.set("project.watch.usePolling", true);

fis.config.set('namespace', 'pcadmin');

fis.hook('commonjs', {
    extList: ['.js', '.jsx', '.es', '.ts', '.tsx', '.es6', '.vue']
});

fis.hook('node_modules');


fis.match('{client,pkg,node_modules}/(**)', {
    release: 'www/static/${namespace}/$0',
    url: '/www/static/${namespace}/$0',
    useHash: false
});

fis.match('/{node_modules, client}/**.{js,ts,es}', {
    isMod: true,
    parser: fis.plugin('babel-6.x', {
        presets:[
            ["es2015", {"loose": true}],
            "stage-1"
        ]
    }),
    preprocessor: [
        fis.plugin('js-require-css')
    ],
    rExt: '.js',
    useSameNameRequire: true
});

fis.match('*.less', {
    rExt: 'css',
    parser: fis.plugin('less'),
    postprocessor: fis.plugin('autoprefixer')
});

// 编译vue组件
fis.match('**.vue', {
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
    parser: fis.plugin('vue-component',{
        runtimeOnly: true,
        extractCSS: false,
        cssScopedFlag: '__vuec__',
    })
});

// 编译vue组件中的js
fis.match('**.vue:js', {
    parser: fis.plugin('babel-6.x', {
        presets:[
            ["es2015", {"loose": true}],
            "stage-1"
        ]
    })
});

// vue组件中的less片段处理
fis.match('**.vue:less', {
    rExt: 'css',
    parser: fis.plugin('less'),
    postprocessor: fis.plugin('autoprefixer')
});


// 第三方强依赖库
fis.match('/node_modules/**.{js,es,ts,vue}', {
    packTo: '/pkg/libs.js'
});

// 按需打包加载
fis.match('/client/views/(**)/**.{js,es,ts,vue}', {
    packTo: '/pkg/views/$1.js'
});

//require加载器不需要 mod 且打包需要放到最前面
fis.match('mod.js', {
    isMod: false,
    packOrder: -100,
    release: false
});

fis.match('::package', {
    // packager: fis.plugin('deps-pack', {
    //     '/client/pkg/views/home.js': [
    //         '/client/views/home/index.vue',
    //         '/client/views/home/index.vue:deps'
    //     ],
    //     '/client/pkg/views/ui.js': [
    //         '/client/views/ui/index.vue',
    //         '/client/views/ui/index.vue:deps'
    //     ]
    // }),
    postpackager: [fis.plugin('loader', {
        resourceType: 'mod',
        allInOne: true,
        useInlineMap: true // 资源映射表内嵌,
    })]
});


fis.media('prod')
    .match('{client,pkg,node_modules}/(**)', {
        release: '/static/${namespace}/$0',
        url: '/static/${namespace}/$0',
        useHash: true
    })
    .match('*.{js,ts,es,vue}', {
        optimizer: fis.plugin('uglify-js', {
            mangle: {
                expect: ['require', 'define', 'some string']
            },
            compress: {
                drop_console: false
            }
        })
    })
    .match('*.{styl,css,less}', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': true // 保持一个规则一个换行
        })
    })