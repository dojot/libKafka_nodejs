{
  "targets": [
    {
      "target_name": "adminkafka_node",
      "cflags": [
        "-Wall",
        "-Werror",
        "-fPIC"
      ],
      "cflags_cc": [
        "-Wall",
        "-Werror",
        "-fPIC"
      ],
      "sources": [
        "src/node_kafka.cpp"
      ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")",
        "build/include"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').gyp\")",
        "deps/libadminkafka.gyp:libadminkafka"
      ],
      "libraries": [
        "-L../build/lib -ladminkafka"
      ],
      "defines": [
        "NAPI_DISABLE_CPP_EXCEPTIONS",
        "PKG_CONFIG_PATH=./build/share/pkgconfig"
      ],
    }
  ]
}
