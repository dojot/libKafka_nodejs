{
  "targets": [
    {
      "target_name": "libadminkafka",
      "type": "static_library",
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
      "actions": [
        {
          "action_name": "configure",
          "inputs": [],
          "outputs": [
            "libadminkafka/config.h",
          ],
          "action": [
            "./configure.sh", "libadminkafka", "../build"
          ]
        },
        {
          "action_name": "make",
          "inputs": [],
          "outputs": [
            "./build/libadminkafka/src/libadminkafka.a"
          ],
          "action": [
            "./make.sh", "libadminkafka", "../build"
          ]
        }
      ]
    }
  ]
}