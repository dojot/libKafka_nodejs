DEPS_DIR=$1
PREFIX_DIR=$2
BASE_DIR=$(pwd)

cd ${DEPS_DIR}
./autogen.sh
./configure --prefix=${BASE_DIR}/${PREFIX_DIR} CXXFLAGS="-fPIC ${CXXFLAGS}"
