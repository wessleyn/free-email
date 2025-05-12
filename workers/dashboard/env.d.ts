interface CloudflareEnv {
    MY_KV_1: KVNamespace;
    MY_KV_2: KVNamespace;
    MY_KV_NAMESPACE: KVNamespace;
    MY_R2: R2Bucket;
    MY_DO: DurableObjectNamespace;

    // D1 Database binding
    DB: D1Database;
}