import hashlib as hash

hash_goodby = hash.sha1(b"goodby").hexdigest()
hash_hello = hash.sha256(b"hello").hexdigest()

print(hash_hello)
print(hash_goodby)
class hashraimu:
    @staticmethod
    def sharaimu(kotobatati):
        return "".join([kotoba + "ai" for  kotoba in kotobatati])

hash_raimu = hashraimu().sharaimu("arigatou")
print(hash_raimu)

