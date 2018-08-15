#include <napi.h>

#include <adminkafka.hpp>



/*Wrapper*/
Napi::Number createTopicWrapper(const Napi::CallbackInfo& info) 
{
  Napi::Env env = info.Env();

  Napi::String topic = info[0].As<Napi::String>();
  Napi::Number partition = info[1].As<Napi::Number>();
  Napi::Number replica = info[2].As<Napi::Number>();
  Napi::String ip = info[3].As<Napi::String>();
  Napi::Number port = info[4].As<Napi::Number>();  

  int returnValue = kafka::createTopic(topic, partition.Int32Value(), replica.Int32Value(), ip, port);
  
  return Napi::Number::New(env, returnValue);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) 
{
  exports.Set(
"createTopic", Napi::Function::New(env, createTopicWrapper)
  );
 
  return exports;
}


Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  return Init(env, exports);
}

NODE_API_MODULE(adminkafka_node, InitAll)